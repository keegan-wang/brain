from datetime import datetime, date
from sqlalchemy import Column, String, DateTime, Float, JSON, Boolean, ForeignKey, Date, Integer, UniqueConstraint
from sqlalchemy.orm import relationship, Mapped, mapped_column
from .db import Base


class User(Base):
    __tablename__ = "users"
    id: Mapped[str] = mapped_column(String, primary_key=True)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)
    consent_flags: Mapped[dict | None] = mapped_column(JSON, nullable=True)
    privacy_mode: Mapped[str] = mapped_column(String, default="privacy-max")
    on_device_only: Mapped[bool] = mapped_column(Boolean, default=False)
    photos = relationship("Photo", back_populates="user", cascade="all, delete-orphan")


class Photo(Base):
    __tablename__ = "photos"
    id: Mapped[str] = mapped_column(String, primary_key=True)
    user_id: Mapped[str] = mapped_column(String, ForeignKey("users.id"))
    ts: Mapped[datetime] = mapped_column(DateTime, index=True)
    hash: Mapped[str | None] = mapped_column(String, nullable=True)
    blob_ref: Mapped[str | None] = mapped_column(String, nullable=True)
    redacted: Mapped[bool] = mapped_column(Boolean, default=True)
    user = relationship("User", back_populates="photos")
    scene = relationship("Scene", back_populates="photo", uselist=False, cascade="all, delete-orphan")
    domain_scores = relationship("DomainScores", back_populates="photo", uselist=False, cascade="all, delete-orphan")


class Scene(Base):
    __tablename__ = "scenes"
    photo_id: Mapped[str] = mapped_column(String, ForeignKey("photos.id"), primary_key=True)
    scene_json: Mapped[dict] = mapped_column(JSON)
    version: Mapped[str] = mapped_column(String, default="v0.1")
    vision_conf: Mapped[float | None] = mapped_column(Float, nullable=True)
    photo = relationship("Photo", back_populates="scene")


class DomainScores(Base):
    __tablename__ = "domain_scores"
    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    photo_id: Mapped[str] = mapped_column(String, ForeignKey("photos.id"), index=True)
    VIS: Mapped[float] = mapped_column(Float, default=0.0)
    LAN: Mapped[float] = mapped_column(Float, default=0.0)
    SOC: Mapped[float] = mapped_column(Float, default=0.0)
    MOT: Mapped[float] = mapped_column(Float, default=0.0)
    EXEC: Mapped[float] = mapped_column(Float, default=0.0)
    REW: Mapped[float] = mapped_column(Float, default=0.0)
    confidence: Mapped[float] = mapped_column(Float, default=0.0)
    photo = relationship("Photo", back_populates="domain_scores")
    __table_args__ = (UniqueConstraint("photo_id", name="uq_domain_scores_photo"),)


class DailySummary(Base):
    __tablename__ = "daily_summaries"
    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    user_id: Mapped[str] = mapped_column(String, ForeignKey("users.id"), index=True)
    date: Mapped[date] = mapped_column(Date, index=True)
    VIS_mean: Mapped[float] = mapped_column(Float, default=0.0)
    LAN_mean: Mapped[float] = mapped_column(Float, default=0.0)
    SOC_mean: Mapped[float] = mapped_column(Float, default=0.0)
    MOT_mean: Mapped[float] = mapped_column(Float, default=0.0)
    EXEC_mean: Mapped[float] = mapped_column(Float, default=0.0)
    REW_mean: Mapped[float] = mapped_column(Float, default=0.0)
    REW_peak: Mapped[float] = mapped_column(Float, default=0.0)
    photos_count: Mapped[int] = mapped_column(Integer, default=0)


class Feedback(Base):
    __tablename__ = "feedback"
    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    scope: Mapped[str] = mapped_column(String)  # "photo" | "day"
    target_id: Mapped[str] = mapped_column(String)
    adjustments: Mapped[dict | None] = mapped_column(JSON, nullable=True)
    note: Mapped[str | None] = mapped_column(String, nullable=True)
    thumbs: Mapped[int | None] = mapped_column(Integer, nullable=True)  # -1, 0, +1
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)


class ModelVersions(Base):
    __tablename__ = "model_versions"
    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    vision_stack: Mapped[str] = mapped_column(String)
    mapping_prompt_id: Mapped[str] = mapped_column(String)
    weights_checksum: Mapped[str] = mapped_column(String)


